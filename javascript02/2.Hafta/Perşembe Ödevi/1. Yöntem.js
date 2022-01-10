/* 1. Adım: Aylik harcamalarının ve maasinin olduğu Array listesini oluşturmak
   2. Adım: Array listesinden hatırlatma amaçlı, Number olmayan yazdığı notları çıkarmak
   3. Adım: Birinci sıraya yazmış olduğu maaşını bulmak
   4. Adım: Harcamalarının toplamını bulmak
   5. Adım: Şirketin Fikret Bey'in harcamalarına yardımcı olmak için verdiği harcamalarının %20 sini hesaplamak
   6. Adım: Elinde kalan miktarı bulan fonksiyonu yazmak
*/

const incomeStatement = [
  15000,
  2000,
  1000,
  300,
  200,
  "important electronic",
  600,
  79,
  "abo",
  342,
  "printer",
  450,
  32,
  45,
  "fitness",
  64,
  10,
  23,
  12,
  2,
  56,
  7,
];

const incomeStatementNumber = incomeStatement.filter(function (number) {
  return number > 0;
});

const maas = incomeStatementNumber.find(function (elem) {
  return elem > 0;
});
const incomeStatementDelMaas = incomeStatementNumber
  .splice(1)
  .reduce(function (total, amount) {
    return total + amount;
  });
function remainingAmount() {
  return (
    "Fikret Bey'in Elinde Kalan Parası => " +
    (maas - incomeStatementDelMaas) +
    "\n" +
    ("Fikret Bey'e Şirketin yaptığı yardım miktarı => " +
      ((maas - incomeStatementDelMaas) * 1) / 5)
  );
}
console.log(remainingAmount());
