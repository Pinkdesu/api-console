import React, { memo } from "react";

const GitLink: React.VFC = () => {
  return (
    <div className="git-link">
      <a href="https://github.com/Pinkdesu">@pinkdesu</a>
    </div>
  );
};

export default memo(GitLink);
