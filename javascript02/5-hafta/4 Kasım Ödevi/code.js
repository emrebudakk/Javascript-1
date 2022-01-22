const classDataA = [
  {
    name: "Marco",
    dersler: [
      {
        dersAdi: "Matematik",
        not: 80,
      },
      {
        dersAdi: "Fizik",
        not: 90,
      },
      {
        dersAdi: "Kimya",
        not: 80,
      },
      {
        dersAdi: "Geometri",
        not: 80,
      },
    ],
  },
  {
    name: "Alessandra",
    dersler: [
      {
        dersAdi: "Matematik",
        not: 80,
      },
      {
        dersAdi: "Fizik",
        not: 80,
      },
    ],
  },
  {
    name: "Isabella",
    dersler: [
      {
        dersAdi: "Matematik",
        not: 80,
      },
      {
        dersAdi: "Fizik",
        not: 80,
      },
      {
        dersAdi: "Kimya",
        not: 80,
      },
      {
        dersAdi: "Geometri",
        not: 80,
      },
    ],
  },
  {
    name: "Elisa",
    dersler: [
      {
        dersAdi: "Matematik",
        not: 80,
      },
      {
        dersAdi: "Fizik",
        not: 80,
      },
      {
        dersAdi: "Kimya",
        not: 80,
      },
      {
        dersAdi: "Geometri",
        not: 80,
      },
    ],
  },
  {
    name: "Rafaele",
    dersler: [
      {
        dersAdi: "Matematik",
        not: 80,
      },
      {
        dersAdi: "Fizik",
        not: 70,
      },
      {
        dersAdi: "Kimya",
        not: 80,
      },
    ],
  },
  {
    name: "Hans",
    dersler: [
      {
        dersAdi: "Matematik",
        not: 80,
      },
      {
        dersAdi: "Fizik",
        not: 80,
      },
      {
        dersAdi: "Kimya",
        not: 80,
      },
      {
        dersAdi: "Geometri",
        not: 80,
      },
    ],
  },
  {
    name: "Jack",
    dersler: [
      {
        dersAdi: "Matematik",
        not: 80,
      },
      {
        dersAdi: "Fizik",
        not: 80,
      },
      {
        dersAdi: "Kimya",
        not: 80,
      },
      {
        dersAdi: "Geometri",
        not: 80,
      },
    ],
  },
  {
    name: "Vincent",
    dersler: [
      {
        dersAdi: "Matematik",
        not: 80,
      },
      {
        dersAdi: "Fizik",
        not: 80,
      },
      {
        dersAdi: "Kimya",
        not: 80,
      },
      {
        dersAdi: "Geometri",
        not: 80,
      },
    ],
  },
];

// const DERS_AD = classDataA.map((dersName) => dersName.dersler).flat(1);

// console.log(DERS_AD);

// const noteAverage =
//   DERS_AD.filter((name) => name.dersAdi.includes("Matematik"))
//     .map((note) => note.not)
//     .reduce((total, pozitive) => total + pozitive) / classDataA.length;
// console.log(noteAverage);
// console.log(noteAverage);

function getNoteAverage() {
  const DERS_AD = classDataA.map((dersName) => dersName.dersler).flat(1);
  console.log(DERS_AD);
  const noteAverage =
    DERS_AD.filter((name) => name.dersAdi.includes("Matematik"))
      .map((note) => note.not)
      .reduce((total, pozitive) => total + pozitive) / classDataA.length;
  return noteAverage;
}
console.log(getNoteAverage());
