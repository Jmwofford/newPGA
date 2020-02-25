console.log("linked", $);

const rain = () => {
  $(".super").addClass("rain");
};
const shine = () => {
  $(".super").addClass("shine");
};
const snow = () => {
  $(".super").addClass("snow");
};
const createPlayer = () => {
  // getInputs
  get_first = $(".first").val();
  get_last = $(".last").val();
  get_score = $(".score").val();
  playerObject = {
    firstName: get_first,
    lastName: get_last,
    score: get_first
  };
  console.log(playerObject);
  // Append To Table
  let counter = 0;
  let name_row = $("<td>").text(get_last + " , " + get_first);
  let score_row = $("<td>").text(get_score);
  let par_row = $("<td>").text("");
  let stroke_row = $("<td>").text("");

  let unique_row = $("<tr>")
    .addClass("uniqueRow")
    .append(name_row)
    .append(score_row)
    .append(par_row)
    .append(stroke_row);

  $(".super").prepend(unique_row);

  // clear form
  $(".first").val(" ");
  $(".last").val(" ");
  $(".score").val(" ");
};

const editSomething = () => {
  console.log("wrk");
};
const deleteSomething = () => {
  $(".uniqueRow").remove();
};

const pebble = () => {
  $(".courseView").css(
    "background-image",
    "url('http://www.keiretsuforum.com/wp-content/uploads/2016/03/Pebble-Beach-1024x685.jpg')"
  );
  $(".parVal").text(12);
};
const kap = () => {
  $(".courseView").css(
    "background-image",
    "url('https://www.golf.com/wp-content/uploads/2018/03/kapalua-plantation-course-960x540.jpg')"
  );
  $(".parVal").text(9);
};

const spy = () => {
  $(".courseView").css("background-image", "url('/css/images/css.jpg')");
};
const harb = () => {
  $(".courseView").css("background-image", "url('/css/images/css.jpg')");
};
const tpc = () => {
  $(".courseView").css("background-image", "url('/css/images/css.jpg')");
};
const seaisl = () => {
  $(".courseView").css("background-image", "url('/css/images/css.jpg')");
};
const oldwht = () => {
  $(".courseView").css("background-image", "url('/css/images/css.jpg')");
};
const tpines = () => {
  $(".courseView").css("background-image", "url('/css/images/css.jpg')");
};
const bayhill = () => {
  $(".courseView").css("background-image", "url('/css/images/css.jpg')");
};
const innis = () => {
  $(".courseView").css("background-image", "url('/css/images/css.jpg')");
};
