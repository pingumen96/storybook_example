---
to: src/components/<%= h.getTypePath(locals.type) %>/<%=name%>/<%=name%>.stories.js
---
import React from 'react';
import <%=name%> from './<%=name%>';

export default { title: 'atoms/<%=name%>' };
export const Standard = () => <<%=name%> />;