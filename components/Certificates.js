import React from 'react';
import LinkCertificate from './LinkCertificate';
import TitleStack from './TitleStack';
import { CgShapeCircle } from "react-icons/cg";
import TitleCertificate from './TitleCertificate';
import Certificate from './Certificate';

function Certificates() {
  return (
    <section id="certificates" className="py-20 mx-4">
      <h1 className="font-bold font-Kanit text-center text-lg">Badges/Certificates</h1>
      <h2 className="text-lg font-semibold font-Kanit text-primary mt-2">Certificates</h2>
      <div className="grid grid-cols-1 gap-4 md:px-32 md:grid-cols-2 ld:grid-cols-3">
        <div className="mt-1">
          <TitleCertificate>Front-End Web Development</TitleCertificate>
          <Certificate src="/logo-dicoding.png" to="https://www.dicoding.com/certificates/1RXYY95J9XVM" title="Belajar Dasar Pemrograman Web" expDate="Issued Feb 2022 · Expires Feb 2025" />
          <Certificate src="/logo-dicoding.png" to="https://www.dicoding.com/certificates/KEXL3K57MPG2" title="Belajar Membuat Front-End Web untuk Pemula" expDate="Issued Feb 2022 · Expires Feb 2025" />
          <Certificate src="/logo-dicoding.png" to="https://www.dicoding.com/certificates/07Z65O1EJXQR" title="Belajar Fundamental Front-End Web Development" expDate="Issued Mar 2022 · Expires Mar 2025" />
          <Certificate src="/logo-dicoding.png" to="https://www.dicoding.com/certificates/4EXG56JE9XRL" title="Menjadi Front-End Web Developer Expert" expDate="Issued May 2022 · Expires May 2025" />
        </div>
        <div className="mt-1">
          <TitleCertificate>Back-End Development</TitleCertificate>
          <Certificate src="/logo-dicoding.png" to="https://www.dicoding.com/certificates/N9ZOEG6O8XG5" title="Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)" expDate="Issued Mar 2022 · Expires Mar 2025" />
          <Certificate src="/logo-dicoding.png" to="https://www.dicoding.com/certificates/QLZ91JYQEP5D" title="Belajar Dasar Pemrograman JavaScript" expDate="Issued Apr 2022 · Expires Apr 2025" />
          <Certificate src="/logo-dicoding.png" to="https://www.dicoding.com/certificates/NVP7KY8DWZR0" title="Belajar Membuat Aplikasi Back-End untuk Pemula" expDate="Issued Apr 2022 · Expires Apr 2025" />
          <Certificate src="/logo-dicoding.png" to="https://www.dicoding.com/certificates/53XEW3WE0XRN" title="Architecting on AWS (Membangun Arsitektur Cloud di AWS)" expDate="Issued Dec 2021 · Expires Dec 2024" />
        </div>
        <div className="mt-1">
          <TitleCertificate>React.js Development</TitleCertificate>
          <Certificate src="/logo-dicoding.png" to="https://dicoding.com/certificates/98XWR2YLWZM3" title="Belajar Membuat Aplikasi Web dengan React" expDate="Issued Jun 2022 · Expires Jun 2025" />
          <Certificate src="/logo-dicoding.png" to="https://www.dicoding.com/certificates/L4PQ6RVDOPO1" title="Belajar Fundamental Aplikasi Web dengan React" expDate="Issued Oct 2022 · Expires Oct 2025" />
        </div>
        <div className="mt-1">
          <TitleCertificate>Multi-Platform Development</TitleCertificate>
          <Certificate src="/logo-dicoding.png" to="https://dicoding.com/certificates/98XWR2869ZM3" title="Memulai Pemrograman Dengan Dart" expDate="Issued Jun 2022 · Expires Jun 2025" />
          <Certificate src="/logo-dicoding.png" to="https://www.dicoding.com/certificates/4EXG5R759XRL" title="Belajar Membuat Aplikasi Flutter untuk Pemula" expDate="Issued Aug 2022 · Expires Aug 2025" />
        </div>
        <div className="mt-1">
          <TitleCertificate>Machine Learning Development</TitleCertificate>
          <Certificate src="/logo-dicoding.png" to="https://www.dicoding.com/certificates/MRZMDY8G3ZYQ" title="Belajar Dasar Visualisasi Data" expDate="Issued Jul 2022 · Expires Jul 2025" />
          <Certificate src="/logo-dicoding.png" to="https://www.dicoding.com/certificates/ERZRMEWVQPYV" title="Memulai Pemrograman Dengan Python" expDate="Issued Jul 2022 · Expires Jul 2025" />
          <Certificate src="/logo-dicoding.png" to="https://www.dicoding.com/certificates/MRZMDJ8NLZYQ" title="Belajar Machine Learning untuk Pemula" expDate="Issued Aug 2022 · Expires Aug 2025" />
        </div>
        <div className="mt-1">
          <TitleCertificate>Others</TitleCertificate>
          <Certificate src="/logo-dicoding.png" to="https://www.dicoding.com/certificates/MRZMDKOJ3ZYQ" title="Meniti Karier sebagai Software Developer" expDate="Issued Feb 2022 · Expires Feb 2025" />
          <Certificate src="/logo-dicoding.png" to="https://dicoding.com/certificates/L4PQ3L7GQPO1" title="Pengenalan ke Logika Pemrograman (Programming Logic 101)" expDate="Issued Feb 2022 · Expires Feb 2025" />
          <Certificate src="/logo-dicoding.png" to="https://dicoding.com/certificates/RVZK1QW2QPD5" title="Memulai Dasar Pemrograman untuk Menjadi Pengembang Software" expDate="Issued Feb 2022 · Expires Feb 2025" />
          <Certificate src="/logo-dicoding.png" to="https://www.dicoding.com/certificates/1RXYON57KPVM" title="Pengenalan Data pada Pemrograman (Data 101)" expDate="Issued Feb 2022 · Expires Feb 2025" />
          <Certificate src="/logo-dicoding.png" to="https://www.dicoding.com/certificates/JMZVG0Q63ZN9" title="Belajar Membuat Augmented Reality dengan Lens Studio" expDate="Issued Aug 2022 · Expires Aug 2025" />
          <Certificate src="/logo-dicoding.png" to="https://www.dicoding.com/certificates/0LZ03YDLQZ65" title="Memulai Pemrograman Dengan Java" expDate="Issued Oct 2021 · Expires Oct 2024" />
          <Certificate src="/logo-dicoding.png" to="https://www.dicoding.com/certificates/MRZMG9WRRZYQ" title="Memulai Pemrograman Dengan Kotlin" expDate="Issued Jun 2021 · Expires Jun 2024" />
        </div>
      </div>
      <div>
      <h2 className="text-lg font-Kanit font-semibold text-primary mt-2">Badges</h2>
        <div>
          <Certificate src="/logo-dicoding.png" to="https://drive.google.com/file/d/166SGDF_8kCrgw6-pxA6bka-5bQ2IFS7L/view?usp=sharing" title="Certificate of Appreciation for Studi Independen Kampus Merdeka Batch 2 Program (Learning Path - Front-End Web and Back-End Developer)" expDate="Issued Jul 2022" />
        </div>
      </div>
    </section>
  );
}

export default Certificates;