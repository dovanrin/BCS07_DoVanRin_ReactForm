const stateDefoult = {
  mangSinhVien: [],
};

export const sinhVienReduce = (state = stateDefoult, action) => {
  switch (action.type) {
    case "THEM_SINH_VIEN":
      {
        let newArrSinhVien = [...state.mangSinhVien, action.sinhVien];
        // state.mangSinhVien = newArrSinhVien;
        return { ...state, mangSinhVien: [...newArrSinhVien] };
      }
      break;

    case "XOA_SINH_VIEN":
      {
        let newArrSinhVien = [...state.mangSinhVien];
        // state.mangSinhVien = newArrSinhVien;
        let index = newArrSinhVien.findIndex(
          (thongTinSV) => thongTinSV.maSV === action.maSV
        );
        if (index !== -1) {
          newArrSinhVien.splice(index, 1);
          return { ...state, mangSinhVien: [...newArrSinhVien] };
        }
      }
      break;
    case "TT_SINH_VIEN":
      {
        let newArrSinhVien = [...state.mangSinhVien];
        // state.mangSinhVien = newArrSinhVien;
        // let index = newArrSinhVien.findIndex(
        //   (thongTinSV) => thongTinSV.maSV === action.maSV
        // );
        // if (index !== -1) {
        console.log(action);
        // }
        return { ...state, mangSinhVien: [...newArrSinhVien] };
      }
      break;
    default:
      {
        return { ...state };
      }
      break;
  }
};
