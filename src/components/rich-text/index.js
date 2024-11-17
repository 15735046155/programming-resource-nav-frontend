/**
 * @description React wangEditor usage
 * @author wangfupeng
 */
// editor.getHtml() 获取html
// editor.insertText(' hello ') 手动插入html

import React, { useState, useEffect } from 'react'
import '@wangeditor/editor/dist/css/style.css'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'

function MyEditor({ content, cb }) {
  const [editor, setEditor] = useState(null) // 存储 editor 实例
  const [html, setHtml] = useState(content)

  const toolbarConfig = { }
  const editorConfig = {
      placeholder: '请输入内容...',
  }

  // 及时销毁 editor
  useEffect(() => {
    return () => {
      if (editor == null) return
      editor.destroy()
      setEditor(null)
    }
  }, [editor])

  const changeHtml = (editor) => {
    console.log(editor.getHtml());
    const reaHtml = editor.getHtml();
    setHtml(reaHtml);
    cb(reaHtml)
  }

  return (
    <>
      <div style={{ border: '1px solid #ccc', zIndex: 100, marginTop: '15px'}}>
        <Toolbar
          editor={editor}
          defaultConfig={toolbarConfig}
          mode="default"
          style={{ borderBottom: '1px solid #ccc' }}
        />
        <Editor
          defaultConfig={editorConfig}
          value={html}
          onCreated={setEditor}
          onChange={changeHtml}
          mode="default"
          style={{ height: '500px' }}
        />
      </div>
      {/* <span dangerouslySetInnerHTML={{ __html: html}}></span> */}
    </>
  )
}

export default MyEditor;
