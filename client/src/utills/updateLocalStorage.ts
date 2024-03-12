export default function updateLocalStorage<T>(data: T, item: string) {
  const JSONData = JSON.stringify(data);
  localStorage.setItem(item, JSONData);
}
