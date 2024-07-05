export const GET = async () => {
  //TODO
  const pdf = new Buffer(``);
  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-disposition": `inline;filename="myDocument.pdf"`,
    },
  });
};
