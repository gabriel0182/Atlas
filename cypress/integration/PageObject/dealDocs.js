class dealDocs {
  getData2() {
    let date2 = Cypress.moment().format("ddd, hA, mm");
    cy.fixture("dealDocumentFolder.json").then(() => {
      this.foldername = `AUT D ${date2}`;
    });
  }
  selectDealDocs() {
    const dealOption = cy
      .get('[class="level-2"]')
      .get('[class="display-link selected"]')
      .get('[title="Deal Documents"]')
      .contains("Deal Documents");
    dealOption.click({ force: true });
    dealOption.wait(2000);
    const newFolder = cy
      .get('[class="flex-row align-center justify-end"]')
      .contains("New Folder");
    newFolder.click({ force: true });
    newFolder.wait(1000);
    const folderModal = cy
      .get('[class="nativ-modal__inner undefined "]')
      .get('[name="rename-document-input"]')
      .get('[placeholder="Folder Name"]');
    folderModal.type(`${this.foldername}`);
    folderModal.wait(1000);
    const saveFolder = cy
      .get('[class="modal-actions"]')
      .get('[class="modal-actions__section --right"]')
      .get('[class="standard-button null primary-button"]')
      .contains("Save");
    saveFolder.click({ force: true });
    saveFolder.wait(3000);
    const confirmFolder = cy
      .get('[class="rt-tbody"]')
      .get('[class="rt-tr-group"]')
      .contains(`${this.foldername}`);
    confirmFolder.should("be.visible", true);
    return this;
  }
  uploadFile() {
    const newFolder = cy
      .get('[class="rt-tbody"]')
      .get('[class="rt-tr-group"]')
      .contains(`${this.foldername}`);
    newFolder.click({ force: true });
    const fileName = "1. Portfolio Analytics Report.xlsx";
    const attFile = cy.xpath(
      "/html[1]/body[1]/div[1]/div[1]/div[2]/div[3]/div[1]/div[1]/div[2]/button[2]"
    );
    attFile.attachFile(fileName, {
      mimeType:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      subjectNature: "shadow",
      subjectType: "input",
      force: true,
    });
    //atthButton.attachFile(fileName, { subjectType: "drag-n-drop" })
    return this;
  }

  deleteFolder() {
    const back = cy
      .get('[class="flex-column"]')
      .get('[class="nativ-breadcrumbs"]')
      .get('[class="breadcrumb-item"]')
      .contains("Documents");
    back.click({ force: true });
    const newFolder = cy
      .get('[class="rt-tbody"]')
      .get('[class="rt-tr-group"]')
      .contains(`${this.foldername}`);
    newFolder.trigger("mouseover");
    const del = cy.xpath(
      "//body/div[@id='root']/div[1]/div[2]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[5]/button[1]/*[1]"
    );
    del.click({ force: true });
    const confirmDelete = cy.get('[id="confirm-dialog"]').within(() => {
      cy.get("button").contains("Delete");
    });
    confirmDelete.click({ force: true });
    return this;
  }
}
export default dealDocs;