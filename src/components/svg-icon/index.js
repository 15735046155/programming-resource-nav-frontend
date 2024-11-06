import React from 'react';

import './index.scss';

const SvgIcon = (props) => {
  const { className = '', iconName, style } = props;

  return (
    <svg className={`iconfont-bs ${className || ''}`} style={style} aria-hidden="true">
      <use xlinkHref={`#${iconName}`} />
    </svg>
  );
};

export default SvgIcon;
