import * as React from "react";

function menu(props) {
  return (
    <svg
      id="prefix__Layer_1"
      viewBox="0 0 64 64"
      xmlSpace="preserve"
      width="1em"
      height="1em"
      {...props}
    >
      <style type="text/css" id="style2">
        {".prefix__st0{fill:#134563}"}
      </style>
      <g id="prefix__g8">
        <g id="prefix__Navicon" transform="translate(330 232)">
          <path
            className="prefix__st0"
            id="prefix__Fill-19"
            d="M-321.8-219h47.5v6.3h-47.5z"
          />
          <path
            className="prefix__st0"
            id="prefix__Fill-20"
            d="M-321.8-203.2h47.5v6.4h-47.5z"
          />
          <path
            className="prefix__st0"
            id="prefix__Fill-21"
            d="M-321.8-187.3h47.5v6.3h-47.5z"
          />
        </g>
      </g>
      <path
        d="M8.222 47.841v-3.11h47.429v6.221H8.222z"
        id="prefix__path17"
        fill="navy"
        strokeWidth={0.063}
      />
      <path
        d="M8.222 32v-3.143h47.429v6.286H8.222z"
        id="prefix__path23"
        fill="navy"
        strokeWidth={0.063}
      />
      <path
        d="M8.222 16.159v-3.111h47.429V19.27H8.222z"
        id="prefix__path25"
        fill="navy"
        strokeWidth={0.063}
      />
    </svg>
  );
}

const MenuIcon = React.memo(menu);
export default MenuIcon;
