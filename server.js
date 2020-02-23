console.log("linked", $);

const createPlayer = () => {
  // getInputs
  get_first = $(".first").val();
  get_last = $(".last").val();
  get_score = $(".score").val();

  console.log(get_first);
  console.log(get_last);
  console.log(get_score);

  $(".first").val(" ");
  $(".last").val(" ");
  $(".score").val(" ");
};
