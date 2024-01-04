---
to: <%= path %>/<%= Name %>/index.ts
---
<%
  const Name = h.changeCase.pascal(name)
%>export * from './<%= Name %>'
