import React from 'react';
import LinkCertificate from './LinkCertificate';
import TitleStack from './TitleStack';
import { CgShapeCircle } from "react-icons/cg";
import TitleCertificate from './TitleCertificate';
import Certificate from './Certificate';

function Certificates() {
  return (
    <section id="Certificates" className="py-4 mx-4">
      <h1 className="font-bold text-center text-lg">Badges/Certificates</h1>
      <h2 className="text-lg font-bold text-primary mt-2">Certificates</h2>
      <div className="grid grid-cols-1 gap-4 md:px-32 md:grid-cols-2 ld:grid-cols-3">
        <div>
          <TitleCertificate>Front-End Web Development</TitleCertificate>
          <Certificate src="/logo-dicoding.png" to="https://www.dicoding.com/certificates/1RXYY95J9XVM" title="Belajar Dasar Pemrograman Web" expDate="Issued Feb 2022 · Expires Feb 2025" />
        </div>
        <h2 className="text-lg font-bold text-primary mt-2">Badges</h2>
        <div>
          <Certificate src="/logo-dicoding.png" to="https://www.dicoding.com/certificates/1RXYY95J9XVM" title="Belajar Dasar Pemrograman Web" expDate="Issued Feb 2022 · Expires Feb 2025" />
        </div>
      </div>
    </section>
  );
}

export default Certificates;