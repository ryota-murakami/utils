---
to: <%= path %>/<%= Name %>/<%= Name %>.tsx
---
<%
  const Name = h.changeCase.pascal(name);
%>import React from 'react';

type Props = {};

export const <%= Name %>: React.FC<Props> = props => {
  return <div><%= Name %></div>;
};
