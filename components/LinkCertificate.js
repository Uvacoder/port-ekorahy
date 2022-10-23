import React from 'react';

function LinkCertificate({ to, children }) {
  return <a href={to} target="_blank" rel="noreferrer" className="block leading-relaxed text-sm py-2">{children}</a>
}

export default LinkCertificate;