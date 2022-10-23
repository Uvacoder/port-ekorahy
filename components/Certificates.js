import React from 'react';
import LinkCertificate from './LinkCertificate';
import TitleStack from './TitleStack';
import { CgShapeCircle } from "react-icons/cg";

function Certificates() {
  return (
    <section id="Certificates" className="my-10">
      <h1 className="font-bold text-center text-xl">Badges/Certificates</h1>
      <div className="grid grid-cols-1 gap-4 px-4 mt-4 md:px-32 md:grid-cols-2 ld:grid-cols-3">
        <div>
          <TitleStack>Front-End Web Development</TitleStack>
          <div>
            <LinkCertificate to="https://www.dicoding.com/certificates/1RXYY95J9XVM"><CgShapeCircle className="text-primary inline-block items-center h-6"/>Belajar Dasar Pemrograman Web</LinkCertificate>
            <LinkCertificate to="https://www.dicoding.com/certificates/1RXYY95J9XVM"><CgShapeCircle className="text-primary inline-block items-center h-6"/>Belajar Dasar Pemrograman Web</LinkCertificate>
            <LinkCertificate to="https://www.dicoding.com/certificates/1RXYY95J9XVM"><CgShapeCircle className="text-primary inline-block items-center h-6"/>Belajar Dasar Pemrograman Web</LinkCertificate>
            <LinkCertificate to="https://www.dicoding.com/certificates/1RXYY95J9XVM"><CgShapeCircle className="text-primary inline-block items-center h-6"/>Belajar Dasar Pemrograman Web</LinkCertificate>
          </div>
        </div>
        <div>
          <TitleStack>Multi-Platform App Development</TitleStack>
          <div>
            <LinkCertificate to="https://www.dicoding.com/certificates/1RXYY95J9XVM"><CgShapeCircle className="text-primary inline-block items-center h-6"/>Belajar Dasar Pemrograman Web</LinkCertificate>
            <LinkCertificate to="https://www.dicoding.com/certificates/1RXYY95J9XVM"><CgShapeCircle className="text-primary inline-block items-center h-6"/>Belajar Dasar Pemrograman Web</LinkCertificate>
          </div>
        </div>
        <div>
          <TitleStack>React Development</TitleStack>
          <div>
            <LinkCertificate to="https://www.dicoding.com/certificates/1RXYY95J9XVM"><CgShapeCircle className="text-primary inline-block items-center h-6"/>Belajar Dasar Pemrograman Web</LinkCertificate>
            <LinkCertificate to="https://www.dicoding.com/certificates/1RXYY95J9XVM"><CgShapeCircle className="text-primary inline-block items-center h-6"/>Belajar Dasar Pemrograman Web</LinkCertificate>
          </div>
        </div>
        <div>
          <TitleStack>Back-End Development</TitleStack>
          <div>
            <LinkCertificate to="https://www.dicoding.com/certificates/1RXYY95J9XVM"><CgShapeCircle className="text-primary inline-block items-center h-6"/>Belajar Dasar Pemrograman Web</LinkCertificate>
            <LinkCertificate to="https://www.dicoding.com/certificates/1RXYY95J9XVM"><CgShapeCircle className="text-primary inline-block items-center h-6"/>Belajar Dasar Pemrograman Web</LinkCertificate>
            <LinkCertificate to="https://www.dicoding.com/certificates/1RXYY95J9XVM"><CgShapeCircle className="text-primary inline-block items-center h-6"/>Belajar Dasar Pemrograman Web</LinkCertificate>
            <LinkCertificate to="https://www.dicoding.com/certificates/1RXYY95J9XVM"><CgShapeCircle className="text-primary inline-block items-center h-6"/>Belajar Dasar Pemrograman Web</LinkCertificate>
          </div>
        </div>
        <div>
          <TitleStack>Machine Learning</TitleStack>
          <div>
            <LinkCertificate to="https://www.dicoding.com/certificates/1RXYY95J9XVM"><CgShapeCircle className="text-primary inline-block items-center h-6"/>Belajar Dasar Pemrograman Web</LinkCertificate>
            <LinkCertificate to="https://www.dicoding.com/certificates/1RXYY95J9XVM"><CgShapeCircle className="text-primary inline-block items-center h-6"/>Belajar Dasar Pemrograman Web</LinkCertificate>
            <LinkCertificate to="https://www.dicoding.com/certificates/1RXYY95J9XVM"><CgShapeCircle className="text-primary inline-block items-center h-6"/>Belajar Dasar Pemrograman Web</LinkCertificate>
          </div>
        </div>
        <div>
          <TitleStack>Other</TitleStack>
          <div>
            <LinkCertificate to="https://www.dicoding.com/certificates/1RXYY95J9XVM"><CgShapeCircle className="text-primary inline-block items-center h-6"/>Belajar Dasar Pemrograman Web</LinkCertificate>
            <LinkCertificate to="https://www.dicoding.com/certificates/1RXYY95J9XVM"><CgShapeCircle className="text-primary inline-block items-center h-6"/>Belajar Dasar Pemrograman Web</LinkCertificate>
            <LinkCertificate to="https://www.dicoding.com/certificates/1RXYY95J9XVM"><CgShapeCircle className="text-primary inline-block items-center h-6"/>Belajar Dasar Pemrograman Web</LinkCertificate>
          </div>
        </div>
        <div>
          <TitleStack>Badges</TitleStack>
          <div>
            <LinkCertificate to="https://www.dicoding.com/certificates/1RXYY95J9XVM"><CgShapeCircle className="text-primary inline-block items-center h-6"/>Belajar Dasar Pemrograman Web</LinkCertificate>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certificates;