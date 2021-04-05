export interface ArticleResponseModel {
    articleId: number,
    title: string,
    content: string,
    image: string,
    roomPrice: number,
    description: string,
    createTime: number,
    lastUpdateTime: number,
    expDate: null,
    vip: boolean,
    status: string,

    service: { // dịch vụ
      serviceId: number,
      waterPrice: number,
      electricPrice: number,
      wifiPrice: number,
    },

    roommate: { // bạn cùng phòng
      roommateId: number,
      gender: boolean,
      quantity: number,
      description: string,
    },

    customer: { // người cho thuê
      customerId: number,
      name: string,
      email: string,
    },

    moderator: null,

    location: {// ở đầu
      wardName: string,
      districtId: number,
      districtName: string,
      cityName: string,
      wardId: number,
      cityId: number,
    }
}