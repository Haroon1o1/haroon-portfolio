import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Photos</h1>
    <ImageGrid
  columns={2}
  images={[
    { src: "/photos/1.png", alt: "Fitxol", href: "" ,},
    { src: "/photos/2.png", alt: "Qalb e Saleem", href: "" ,},
    { src: "/photos/3.png", alt: "HearMate", href: "" },
    { src: "/photos/4.png", alt: "HearMate", href: "" },
    { src: "/photos/5.png", alt: "HearMate", href: "" },
    { src: "/photos/6.png", alt: "HearMate", href: "" },
    { src: "/photos/7.png", alt: "HearMate", href: "" },
  ]}
/>


      {/* { <ImageGrid
        columns={2}
        images={[
         { src: "/photos/photo1.png", alt: "Fitxol" },
          { src: "/photos/photo2.png", alt: "Qalb e Saleem" },
          { src: "/photos/photo3.png", alt: "HearMate" },

        ]}
      /> }   */}

      {/* <ImageGrid
        columns={4}
        images={[
          { src: "/photos/photo1.png", alt: "Fitxol" },
          { src: "/photos/photo2.png", alt: "Qalb e Saleem" },
          { src: "/photos/photo3.png", alt: "HearMate" },

        ]}
      /> */}
    </section>
  );
}
