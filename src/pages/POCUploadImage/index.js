import { Fragment } from "react";
import { CONTENT_TYPES, requestHttp } from "../../utils/HttpRequest";

export const POCUploadImage = () => {

  const fileSelectedHandler = (event) => {
    const file = event.target.files[0];
    requestUploadFile(file);
  };

  const requestUploadFile = async (file) => {
    try {
        const formData = new FormData();
        formData.append("propertyImage", file);
        const response = await requestHttp({
            endpoint: '/properties/upload',
            contentType: CONTENT_TYPES.MULTIPART_FORM_DATA,
            body: formData
        });
        console.log('response', response);
    } catch (error) {
        console.log('error', error);
    }
  }

  return (
    <Fragment>
      <h2>Upload Image</h2>
      <input
        type="file"
        accept="image/png, image/jpeg"
        //multiple
        onChange={fileSelectedHandler}
      />
    </Fragment>
  );
};
