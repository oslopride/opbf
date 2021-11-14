import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Oslo Pride Business Forum")
    .items([
      S.listItem()
        .title("Main page")
        .child(
          S.editor()
            .title("Main page")
            .id("mainPage")
            .schemaType("mainpage")
            .documentId("33246221-2b64-4477-b14b-27952ab6c3f8")
        ),
      S.listItem()
        .title("Program page")
        .child(
          S.editor()
            .title("Program page")
            .id("programPage")
            .schemaType("program")
            .documentId("4d65fd6b-e99f-481c-b6c0-5509d546d774")
        ),
    ]);
