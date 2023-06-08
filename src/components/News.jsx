import React from "react";

const NewsComponent = () => {
  return (
    <section id="news">
      <hr />
      <h1 className="news">News</h1>
      <hr />

      <h2 className="news">Tour Dates</h2>
      <table className="newstable">
        <thead>
          <tr>
            <th className="newsrow">Date</th>
            <th className="newsrow">Venue</th>
            <th className="newsrow">Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="newscol">DEZ 12, 2019</td>
            <td className="newscol">Brecho Pub</td>
            <td className="newscol">Canoas, Brazil</td>
          </tr>
          <tr>
            <td className="newscol">MAY 1, 2019</td>
            <td className="newscol">Parque Eduardo Gomes</td>
            <td className="newscol">Canoas, Brazil</td>
          </tr>
          <tr>
            <td className="newscol">NOV 18, 2018</td>
            <td className="newscol">Fundação Cultural</td>
            <td className="newscol">Canoas, Brazil</td>
          </tr>
          <tr>
            <td className="newscol">APR 14, 2018</td>
            <td className="newscol">Blackbird Pub</td>
            <td className="newscol">Canoas, Brazil</td>
          </tr>
          <tr>
            <td className="newscol">SET 23, 2017</td>
            <td className="newscol">Blackbird Pub</td>
            <td className="newscol">Canoas, Brazil</td>
          </tr>
          <tr>
            <td className="newscol">AGO 12, 2017</td>
            <td className="newscol">Navarro</td>
            <td className="newscol">Canoas, Brazil</td>
          </tr>
          <tr>
            <td className="newscol">JUL 1, 2017</td>
            <td className="newscol">Blackbird Pub</td>
            <td className="newscol">Canoas, Brazil</td>
          </tr>
          <tr>
            <td className="newscol">MAY 24, 2017</td>
            <td className="newscol">Blackbird Pub</td>
            <td className="newscol">Canoas, Brazil</td>
          </tr>
        </tbody>
      </table>

      <h2 className="news">Latest News</h2>
      <article>
        <h3 className="news">
          New EP "The Shining Moon" to be released on June, 2023.
        </h3>
        <p>
          After months of anticipation, the band has announced that they will be
          releasing their highly anticipated fourth album in the fall of 2023.
        </p>
      </article>
      <article>
        <h3 className="news">
          The release of the debut EP "Politics" on December 19th, 2019.
        </h3>
        <p>
          The band released their highly anticipated EP "Politics" on December
          19th, 2019. This five-track EP features the band's signature sound and
          explores a variety of themes, including war, politics, automation, and
          modern relationships. The EP kicks off with "Void", an introspective
          track that sets the tone for the rest of the album. "Paralyzed"
          follows with a powerful, driving beat and soaring vocals that showcase
          the band's range and intensity. "Background" offers a change of pace
          with its more subdued, melodic sound and lyrics that touch on the
          complexities of human relationships. "Interlude" serves as a brief
          instrumental break, showcasing the band's versatility and musical
          prowess. The EP closes with the title track "Politics", a
          thought-provoking anthem that challenges listeners to reflect on the
          current state of the world and their place in it. Overall, "Politics"
          is a strong release from Klose that showcases their ability to tackle
          weighty themes with nuance and skill. With their unique sound and
          compelling lyrics, this EP is sure to resonate with fans of
          alternative rock and beyond.
        </p>
      </article>
    </section>
  );
};

export default NewsComponent;
