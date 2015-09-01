var app = new AppView({
  model: new AppModel({
    images: new ImageList(ImageData),
    ratings: new DropDownList(RatingData)
  })
});
