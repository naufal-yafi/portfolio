"use client";

import Button from "@component/Button";
import { useState } from "react";

const Journey = () => {
  const [show, setShow] = useState(false);

  const HandleShowText = () => {
    setShow(!show);
  };

  return (
    <section className="px-6 lg:px-32 mt-14 flex flex-col">
      <div
        className={`overflow-hidden ${
          show ? "h-full" : "h-[350px]"
        } transition-all flex flex-col justify-start items-start`}
      >
        <h1 className="italic font-light text-4xl mb-8">My Journey</h1>
        <p className="font-light leading-loose tracking-wide">
          Bisa dibilang saya memiliki rasa ingin tau yang tinggi, membuat saya
          pribadi ingin dan terus untuk belajar. Selain itu saya juga memiliki
          sifat perfeksionis yang memakan waktu yang cukup lama untuk
          memperbaiki sampai sebagus mungkin. Juga waktu adaptasi yang cukup
          lama di lingkungan yang baru merupakan salah satu kekurangan saya.
          <br /> <br />
          Mengenal dunia programming ketika dibangku SMP 02 Wiradesa kelas 2,
          waktu itu hanya belajar HTML dan CSS saja, dan menekuni lebih dalam
          lagi ketika saya berada di bangku SMAN 01 Wiradesa kelas 2, dimana
          waktu itu sangat pas untuk belajar programming, karena kegiatan
          belajar mengajar dilakukan secara online. Jadi, saya bisa belajar hal
          lain dan menekuni apa yang saya sukai. Walau masih belajar HTML, CSS,
          Javascript dari Pak Sandika Galih (Web Programming Unpas).
          <br /> <br />
          Waktu SMA pun telah berakhir. Sembari menunggu pengumuman dari
          universitas atau pergurusan tinggi, saya membeli buku &quot;Logika
          Algoritma dan Pemrograman Dasar&quot; yang ditulis oleh Rosa A.S. Buku
          tersebut membuat saya mengetahui lebih dalam dari konsep dasar
          programming.
          <br /> <br />
          Tahun ajaran baru telah dimulai, saya mempelajari banyak bahasa
          pemrograman di kampus mulai dari Java, PHP, CSS Framework, Python.
          Namun dari semua bahasa tersebut, saya lebih jatuh cinta kepada
          Javascript. Karena saya lebih suka dibagian visual dan framework untuk
          FrontEnd itu sendiri kebanyakan menggunakan Javascript, jadi saya
          belajar React dan juga Next, hingga saat ini.
          <br /> <br />
          <span className="text-xs" id="text">
            2023, 22 November
          </span>
        </p>
      </div>
      <div
        className={`${
          show
            ? "relative h-auto mt-8 justify-start"
            : "absolute h-[350px] justify-center"
        } w-full flex items-end left-0 bg-gradient-to-t from-neutral-900 to-transparent`}
      >
        <div onClick={HandleShowText}>
          <Button
            color={show ? "white" : "yellow"}
            type={show ? "outline" : "bg-fill"}
            link="#text"
            openNewTab={false}
          >
            {show ? "Read Less" : "Read More"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Journey;
