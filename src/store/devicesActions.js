export const createDevice = (data) => (dispatch, gs, { getFirestore }) => {
  const firestore = getFirestore();
  const ref = firestore.collection('devices');
  ref.add({
    ...data
  }).then(() => {
    dispatch({ type: 'CREATEDEVICE_SUCCESS', data });
  }).catch((err) => {
    dispatch({ type: 'CREATEDEVICE_ERROR', err });
  })
};

export const updateDevice = (data, id) => (dispatch, gs, { getFirestore }) => {
  const firestore = getFirestore();
  const ref = firestore.collection('devices');
  ref.doc(id).update({
    ...data,
  }).then(() => {
    dispatch({ type: 'UPDATEDEVICE_SUCCESS', data });
  }).catch((err) => {
    dispatch({ type: 'UPDATEDEVICE_ERROR', err });
  })
};

export const removeDevice = (id) => (dispatch, gs, { getFirestore }) => {
  const firestore = getFirestore();
  const ref = firestore.collection('devices');
  ref.doc(id).delete().then(() => {
    dispatch({ type: 'REMOVEDEVICE_SUCCESS', id });
  }).catch((err) => {
    dispatch({ type: 'REMOVEDEVICE_SUCCESS', err });
  })
};
