import {
  AlignmentType,
  Document,
  HeadingLevel,
  Packer,
  PageMargin,
  Paragraph,
  TabStopPosition,
  TabStopType,
  TextRun,
} from "docx";

//need to change tadiks details
const PHONE_NUMBER = "(330) 506 5298";

const EMAIL = "gowthamcrm365@gmail.com";

// tslint:disable-next-line: typedef
const create = (experiences, summary) => {
  const document = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: "1.27cm", // Top margin in TWIP (1/1440 of an inch)
              right: "1.27cm", // Right margin in TWIP
              bottom: "1.27cm", // Bottom margin in TWIP
              left: "1.27cm", // Left margin in TWIP
            },
          },
        },
        children: [
          new PageMargin("1.27cm", "1.27cm", "1.27cm", "1.27cm", 0, 0, 0),
          new Paragraph({
            text: "GOWTHAM",
            heading: HeadingLevel.TITLE,
            alignment: AlignmentType.CENTER,
          }),
          createContactInfo(PHONE_NUMBER, EMAIL),
          createHeading("Professional Summary"),
          new Paragraph({
            text: summary,
          }),
          createHeading("Experience"),
          ...experiences
            .map((position) => {
              const arr = [];

              arr.push(
                createInstitutionHeader(
                  position.company.name,
                  createPositionDateText(
                    position.startDate,
                    position.endDate,
                    position.isCurrent
                  )
                )
              );
              arr.push(createRoleText(position.title));

              const bulletPoints = splitParagraphIntoBullets(position.summary);

              bulletPoints.forEach((bulletPoint) => {
                arr.push(createBullet(bulletPoint));
              });
              arr.push(
                position?.environment
                  ? new Paragraph({
                      children: [
                        new TextRun({
                          text: "Environment : ",
                          bold: true,
                        }),
                        new TextRun(position.environment),
                      ],
                      thematicBreak: true,
                    })
                  : ""
              );
              return arr;
            })
            .reduce((prev, curr) => {
              return prev.concat(curr);
            }, []),
        ],
      },
    ],
  });

  return document;
};

const createContactInfo = (phoneNumber, email) => {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [
      new TextRun(`Mobile: ${phoneNumber} | Email: ${email}`),
      new TextRun({
        text: "Youngston, OHIO",
        break: 1,
      }),
    ],
    thematicBreak: true,
  });
};

const createHeading = (text) => {
  return new Paragraph({
    text: text,
    heading: HeadingLevel.HEADING_1,
    thematicBreak: true,
  });
};

const createSubHeading = (text) => {
  return new Paragraph({
    text: text,
    heading: HeadingLevel.HEADING_2,
  });
};

const createInstitutionHeader = (institutionName, dateText) => {
  return new Paragraph({
    tabStops: [
      {
        type: TabStopType.RIGHT,
        position: TabStopPosition.MAX,
      },
    ],
    children: [
      new TextRun({
        text: institutionName,
        bold: true,
      }),
      new TextRun({
        text: `\t${dateText}`,
        bold: true,
      }),
    ],
  });
};

const createRoleText = (roleText) => {
  return new Paragraph({
    children: [
      new TextRun({
        text: roleText,
        italics: true,
      }),
    ],
  });
};

const createBullet = (text) => {
  return new Paragraph({
    text: text,
    bullet: {
      level: 0,
    },
  });
};

const splitParagraphIntoBullets = (text) => {
  return text.split("\n\n");
};

// tslint:disable-next-line:no-any
const createPositionDateText = (startDate, endDate, isCurrent) => {
  const startDateText =
    getMonthFromInt(startDate.month) + ". " + startDate.year;
  const endDateText = isCurrent
    ? "Present"
    : `${getMonthFromInt(endDate.month)}. ${endDate.year}`;

  return `${startDateText} - ${endDateText}`;
};

const getMonthFromInt = (value) => {
  switch (value) {
    case 1:
      return "Jan";
    case 2:
      return "Feb";
    case 3:
      return "Mar";
    case 4:
      return "Apr";
    case 5:
      return "May";
    case 6:
      return "Jun";
    case 7:
      return "Jul";
    case 8:
      return "Aug";
    case 9:
      return "Sept";
    case 10:
      return "Oct";
    case 11:
      return "Nov";
    case 12:
      return "Dec";
    default:
      return "N/A";
  }
};

export { create };
