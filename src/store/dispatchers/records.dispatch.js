import { addFacade } from "../actions/records.action";

function addRecordsPromise(record) {
  return Promise.resolve(record);
}

export function addRecord(record) {
  return (dispatch) => {
    dispatch({ type: addFacade.fetching });
    dispatch({ type: addFacade.success, record });

    // addRecordsPromise()
    //   .then((iRecord) => {
    //     dispatch({ type: addFacade.success, record: iRecord });
    //   })
    //   .catch(() => {
    //     dispatch({ type: addFacade.error });
    //   });
  };
}
