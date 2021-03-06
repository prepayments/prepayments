import { element, by, ElementFinder } from 'protractor';

export class PrepsFileUploadComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('gha-preps-file-upload div table .btn-danger'));
  title = element.all(by.css('gha-preps-file-upload div h2#page-heading span')).first();
  noResult = element(by.id('no-result'));
  entities = element(by.id('entities'));

  async clickOnCreateButton(): Promise<void> {
    await this.createButton.click();
  }

  async clickOnLastDeleteButton(): Promise<void> {
    await this.deleteButtons.last().click();
  }

  async countDeleteButtons(): Promise<number> {
    return this.deleteButtons.count();
  }

  async getTitle(): Promise<string> {
    return this.title.getText();
  }
}

export class PrepsFileUploadUpdatePage {
  pageTitle = element(by.id('gha-preps-file-upload-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));

  descriptionInput = element(by.id('field_description'));
  fileNameInput = element(by.id('field_fileName'));
  periodFromInput = element(by.id('field_periodFrom'));
  periodToInput = element(by.id('field_periodTo'));
  prepsFileTypeIdInput = element(by.id('field_prepsFileTypeId'));
  dataFileInput = element(by.id('file_dataFile'));
  uploadSuccessfulInput = element(by.id('field_uploadSuccessful'));
  uploadProcessedInput = element(by.id('field_uploadProcessed'));
  uploadTokenInput = element(by.id('field_uploadToken'));

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getText();
  }

  async setDescriptionInput(description: string): Promise<void> {
    await this.descriptionInput.sendKeys(description);
  }

  async getDescriptionInput(): Promise<string> {
    return await this.descriptionInput.getAttribute('value');
  }

  async setFileNameInput(fileName: string): Promise<void> {
    await this.fileNameInput.sendKeys(fileName);
  }

  async getFileNameInput(): Promise<string> {
    return await this.fileNameInput.getAttribute('value');
  }

  async setPeriodFromInput(periodFrom: string): Promise<void> {
    await this.periodFromInput.sendKeys(periodFrom);
  }

  async getPeriodFromInput(): Promise<string> {
    return await this.periodFromInput.getAttribute('value');
  }

  async setPeriodToInput(periodTo: string): Promise<void> {
    await this.periodToInput.sendKeys(periodTo);
  }

  async getPeriodToInput(): Promise<string> {
    return await this.periodToInput.getAttribute('value');
  }

  async setPrepsFileTypeIdInput(prepsFileTypeId: string): Promise<void> {
    await this.prepsFileTypeIdInput.sendKeys(prepsFileTypeId);
  }

  async getPrepsFileTypeIdInput(): Promise<string> {
    return await this.prepsFileTypeIdInput.getAttribute('value');
  }

  async setDataFileInput(dataFile: string): Promise<void> {
    await this.dataFileInput.sendKeys(dataFile);
  }

  async getDataFileInput(): Promise<string> {
    return await this.dataFileInput.getAttribute('value');
  }

  getUploadSuccessfulInput(): ElementFinder {
    return this.uploadSuccessfulInput;
  }

  getUploadProcessedInput(): ElementFinder {
    return this.uploadProcessedInput;
  }

  async setUploadTokenInput(uploadToken: string): Promise<void> {
    await this.uploadTokenInput.sendKeys(uploadToken);
  }

  async getUploadTokenInput(): Promise<string> {
    return await this.uploadTokenInput.getAttribute('value');
  }

  async save(): Promise<void> {
    await this.saveButton.click();
  }

  async cancel(): Promise<void> {
    await this.cancelButton.click();
  }

  getSaveButton(): ElementFinder {
    return this.saveButton;
  }
}

export class PrepsFileUploadDeleteDialog {
  private dialogTitle = element(by.id('gha-delete-prepsFileUpload-heading'));
  private confirmButton = element(by.id('gha-confirm-delete-prepsFileUpload'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getText();
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
