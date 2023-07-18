const stateDefoult = {
  mangSinhVien: [],
  sinhVienEdit: {},
};

export const sinhVienReduce = (state = stateDefoult, action) => {
  switch (action.type) {
    case "THEM_SINH_VIEN": {
      let newArrSinhVien = [...state.mangSinhVien, action.sinhVien];
      // state.mangSinhVien = newArrSinhVien;
      return { ...state, mangSinhVien: [...newArrSinhVien] };
    }

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
    case "TT_SINH_VIEN": {
      // let newArrSinhVien = [...state.mangSinhVien];
      // state.mangSinhVien = newArrSinhVien;
      // let index = newArrSinhVien.findIndex(
      //   (thongTinSV) => thongTinSV.maSV === action.maSV
      // );
      // if (index !== -1) {
      console.log(action.sinhVien);
      return { ...state, sinhVienEdit: { ...action.sinhVien } };
    }
    case "CAP_NHAT_SV": {
      state.sinhVienEdit = { ...state.sinhVienEdit, sinhVien: action.sinhVien };
      let newArrSinhVien = [...state.mangSinhVien];
      let index = newArrSinhVien.findIndex(
        (thongTinSV) => thongTinSV.maSV === state.sinhVienEdit.maSV
      );
      if (index !== -1) {
        newArrSinhVien[index] = state.sinhVienEdit;
      }
      return { ...state, mangSinhVien: [...newArrSinhVien] };
      // state.mangSinhVien = newArrSinhVien;
    }
    case "SEARCH":
      {
        let newArrSinhVien = [...state.mangSinhVien];
        // state.mangSinhVien = newArrSinhVien;
        newArrSinhVien = newArrSinhVien.filter(
          (thongTinSV) => thongTinSV.hoTen === action.hoTen
        );

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
