// src/components/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../utils/auth';

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('user');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 模拟登录成功
    if (username && role) {
      login(username, role);
      const routeUrl = role === 'user' ? '/home' : '/admin-home';
      navigate(routeUrl, { replace: true }); // 跳转到首页
    } else {
      alert('请输入用户名和角色');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>登录页面</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="用户名"
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="user">用户</option>
        <option value="admin">管理员</option>
      </select>
      <button type="submit">登录</button>
    </form>
  );
}

export default LoginPage;