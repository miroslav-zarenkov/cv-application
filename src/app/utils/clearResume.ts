export default function clearResume(
  setName: (name: string) => void,
  setEmail: (email: string) => void,
  setPhone: (phone: string) => void,
  setAddress: (address: string) => void
) {
  setName('');
  setEmail('');
  setPhone('');
  setAddress('');
}
