export default function loadResume(
  setName: (name: string) => void,
  setEmail: (email: string) => void,
  setPhone: (phone: string) => void,
  setAddress: (address: string) => void
) {
  setName('Test Name');
  setEmail('test@test.com');
  setPhone('1234567');
  setAddress('Test City');
}
