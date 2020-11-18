import Swal from "sweetalert2";

export function handleErrorMassage(error) {
  try {
    const { response } = error;
    Swal.fire({
      title: "Error!",
      text: response.data.status.errorMessage,
      showDenyButton: true,
      showConfirmButton: false,
      denyButtonText: "Close"
    });
  } catch (err) {
    this.errorHandler(err);
  }
}
