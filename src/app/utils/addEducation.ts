export default function addEducation(showForm: boolean, setShowForm: (element: boolean) => void): void {
  // const button = event.target as HTMLElement;
  // const parent = button.parentElement;
  // const div = document.createElement('div');
  // div.textContent = 'testing';
  // parent?.insertBefore(div, button);
  // console.log(parent);
  // console.log('education');
  console.log(showForm);
  setShowForm(!showForm)
  setTimeout(() => {
    console.log(showForm);
  }, 5000);
}

