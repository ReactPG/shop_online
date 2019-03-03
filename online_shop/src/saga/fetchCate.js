import { takeLatest, put, delay } from "redux-saga/effects";
import { FETCH_CATEGORY, FETCH_CATEGORY_SUCCESS } from "../constants/type";
import axios from "axios";

async function callApi() {
    const userData = {
        partnerCode: "bcel",
        account: "bcel"
      };
      const data = await axios
        .get("https://myhome2019.000webhostapp.com/sendRequest/selectdata.php", {params: userData})
        .then(res => {
          return res.data;
            
        })
        .catch(function(error) {
          console.log("error : " + error);
          alert("err" + error);
        });

    return data;
        
}


async function* callData() {
    const data = await callApi();
    console.log(data)
    yield put({ type : FETCH_CATEGORY_SUCCESS, data: data })
}

// Our watcher Saga:
// ເມື່ອມີ dispatch action AGE_UP ເກີດຂຶ້ນມັນຈະມາຜ່ານ watcher (watchAgeUp())
export function* watchFetchCategory() {
  // ເອີ້ນໃຊ້ ageUpAsync
  // yield takeLatest(AGE_UP_ASYNC, ageUpAsync);
  yield takeLatest(FETCH_CATEGORY, callData);
}
