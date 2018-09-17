import { FileUploader, FileItem, FileUploaderOptions } from 'ng2-file-upload';

export class FileUploaderCustom extends FileUploader {

  constructor(options: FileUploaderOptions) {
    super(options);
  }

  uploadAllFiles(): void {

    var xhr = new XMLHttpRequest();
    var sendable = new FormData();
    var fakeitem: FileItem = null;
    this.onBuildItemForm(fakeitem, sendable);

    for (const item of this.queue) {
      item.isReady = true;
      item.isUploading = true;
      item.isUploaded = false;
      item.isSuccess = false;
      item.isCancel = false;
      item.isError = false;
      item.progress = 0;

      if (typeof item._file.size !== 'number') {
        throw new TypeError('The file specified is no longer valid');
      }
      sendable.append('photos', item._file, item.file.name);
    }

    if (this.options.additionalParameter !== undefined) {
      Object.keys(this.options.additionalParameter).forEach((key) => {
        sendable.append(key, this.options.additionalParameter[key]);
      });
    }

    xhr.onload = () => {
      const headers = this._parseHeaders(xhr.getAllResponseHeaders());
            const response = this._transformResponse(xhr.response, headers);
            const gist = this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
            const method = '_on' + gist + 'Item';
            for (const item of this.queue) {
                this[method](item, response, xhr.status, headers);
            }
            this._onCompleteItem(this.queue[0], response, xhr.status, headers);

    };
    xhr.onerror = () => {
      this.onErrorItem(fakeitem, null, xhr.status, null);
    };

    xhr.onabort = () => {
      this.onErrorItem(fakeitem, null, xhr.status, null);
    };

    xhr.open("POST", this.options.url, true);
    xhr.withCredentials = false;
    if (this.options.headers) {
      for (var _i = 0, _a = this.options.headers; _i < _a.length; _i++) {
        var header = _a[_i];
        xhr.setRequestHeader(header.name, header.value);
      }
    }
    if (this.authToken) {
      xhr.setRequestHeader(this.authTokenHeader, this.authToken);
    }
    xhr.send(sendable);
  };

}