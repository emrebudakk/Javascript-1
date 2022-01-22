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
const mainElement = document.querySelector("#main");
function renderCard() {
  return classDataA.map((person) => {
    return `<div>
                <div class="mx-5 mb-2">
                  <div class="card mx-5" style="width: 18rem">
                    <div class="card-body bg-primary text-center">
                      <h5 class="card-title">${person.name}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
          ${createLesson(person.dersler)}
                    </ul>
                  </div>
                </div>
            </div>`;
  });
}
function createUI() {
  mainElement.innerHTML = renderCard();
}
createUI();

function createLesson(pDersList) {
  return pDersList
    .map((ders) => {
      return `<li class="list-group-item d-flex justify-content-between">
    <span>${ders.dersAdi}</span><span>${ders.not}</span>
</li>`;
    })
    .join("");
}

/**************************************************************************/
const mainAverage = document.querySelector("#mainAverage");
function renderNote() {
  return classDataA.map((note) => {
    return `<div class="row row-cols-6">
        <div class="card mx-5">
        <li
          class="card-body d-flex justify-content-between align-items-center"
        >
        ${note.dersler.map((ders) => ders.dersAdi)}
          <span class="badge bg-primary rounded-pill">${getNoteAverage(
            note.not
          )}
          </span>
        </li>
      </div>
      <div class="card mx-5">
        <li
          class="card-body d-flex justify-content-between align-items-center"
        >
          Fizik
          <span class="badge bg-primary rounded-pill">14</span>
        </li>
      </div>
      <div class="card mx-5">
        <li
          class="card-body d-flex justify-content-between align-items-center"
        >
          Kimya
          <span class="badge bg-primary rounded-pill">14</span>
        </li>
      </div>
      <div class="card mx-5">
        <li
          class="card-body d-flex justify-content-between align-items-center"
        >
          Geometri
          <span class="badge bg-primary rounded-pill">14</span>
        </li>
      </div>
    </div>`;
  });
}

function getNoteAverage() {
  const DERS_AD = classDataA.map((dersName) => dersName.dersler).flat(1);

  const noteAverage =
    DERS_AD.filter((name) => name.dersAdi.includes("Matematik"))
      .map((note) => note.not)
      .reduce((total, pozitive) => total + pozitive) / classDataA.length;
  return noteAverage;
}
function createNoteUI() {
  mainAverage.innerHTML = renderNote();
}
createNoteUI();

function averagesLesson(pDersList) {
  return pDersList
    .map((ders) => {
      return `<li
      class="card-body d-flex justify-content-between align-items-center"
    >
    ${note.dersler.dersAdi}
      <span class="badge bg-primary rounded-pill">${getNoteAverage(note.not)}
      </span>
    </li>`;
    })
    .join("");
}
