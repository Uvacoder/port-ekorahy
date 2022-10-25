import React from 'react';

function LinkCertificate({ to, children }) {
  return <a href={to} target="_blank" rel="noreferrer" className="font-semibold text-sm">{children}</a>
}

export default LinkCertificate;