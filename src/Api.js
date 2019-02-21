export function getQ(id) {
  return JSON.parse(localStorage.getItem(id));
}

export function updateQ(id, details) {
  localStorage.setItem(id, JSON.stringify(details));
}

function updateIds(updateFn) {
  const ids = getQIds();
  localStorage.setItem("ids", JSON.stringify(updateFn(ids)));
}

export function addId(id) {
  updateIds(ids => [...ids, id]);
}

export function removeId(id) {
  updateIds(ids => ids.filter(x => x !== id));
}

export function deleteQ(id) {
  localStorage.removeItem(id);
}

export function getQIds() {
  const ids = localStorage.getItem("ids");
  return ids ? JSON.parse(ids) : [];
}
