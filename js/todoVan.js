const addForm = document.querySelector(".add__form");
const addInput = document.querySelector(".inp");
const errorText = document.querySelector(".error_text");
const addBtn = document.querySelector(".main__button");
const mainActive = document.querySelector(".main__items");
const clearBtn = document.querySelector(".clear__btn");
const arr = [];
const val = document.querySelector(".error_text");

let inp;
let newEl;

addInput.addEventListener("input", (e) => {
  inp = e.target.value;
});

const onDragStart = (event) => {
  event.dataTransfer.setData("text/plain", event.target.id);

  event.currentTarget.style.backgroundColor = "yellow";
};

const onDragOver = (event) => {
  event.preventDefault();
};

const onDrop = (event) => {
  const id = event.dataTransfer.getData("text");
  const draggableElement = document.getElementById(id);
  const dropzone = event.target;
  dropzone.appendChild(draggableElement);
  event.dataTransfer.clearData();

  const buttons = document.querySelectorAll(".active button");
  const buttonsOne = document.querySelectorAll(".active__one button");
  const buttonsTwo = document.querySelectorAll(".active__two button");

  buttonsTwo.forEach((el) => {
    // el.setAttribute("disabled", true);
    el.innerHTML = `<svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="17"
        height="17"
        viewBox="0 0 17 17"
      >
        <g></g>
        <path
          d="M14 5.761h1v10.239h-14v-14h8.393v1h-7.393v12h12v-9.239zM4.854 8.146l-0.708 0.708 3.434 3.434 7.587-11.512-0.835-0.551-6.912 10.488-2.566-2.567z"
          fill="#000000"
        />
      </svg>`;
  });

  buttonsOne.forEach((el) => {
    // el.setAttribute("disabled", true);
    el.innerHTML = `<svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="17"
      height="17"
      viewBox="0 0 17 17"
    >
      <g></g>
      <path
        d="M17.020 8h-2.045c-0.245-3.194-2.806-5.745-6.004-5.977v-2.062h-1v2.065c-3.172 0.258-5.702 2.799-5.946 5.974h-2.045v1h2.045c0.244 3.175 2.774 5.716 5.945 5.974v2.026h1v-2.023c3.198-0.231 5.759-2.782 6.004-5.977h2.045v-1zM8.971 13.977v-1.977h-1v1.974c-2.621-0.252-4.708-2.35-4.946-4.974h1.955v-1h-1.955c0.238-2.624 2.325-4.722 4.946-4.974v1.935h1v-1.938c2.647 0.227 4.764 2.333 5.004 4.977h-1.955v1h1.955c-0.24 2.644-2.357 4.75-5.004 4.977z"
        fill="#000000"
      />
    </svg>`;
  });
  buttons.forEach((el) => {
    // el.setAttribute("disabled", true);
    el.innerHTML = `<svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="17"
        height="17"
        viewBox="0 0 17 17"
      >
        <g></g>
        <path
          d="M10.935 2.016c-0.218-0.869-0.999-1.516-1.935-1.516-0.932 0-1.71 0.643-1.931 1.516h-3.569v1h11v-1h-3.565zM9 1.5c0.382 0 0.705 0.221 0.875 0.516h-1.733c0.172-0.303 0.485-0.516 0.858-0.516zM13 4h1v10.516c0 0.827-0.673 1.5-1.5 1.5h-7c-0.827 0-1.5-0.673-1.5-1.5v-10.516h1v10.516c0 0.275 0.224 0.5 0.5 0.5h7c0.276 0 0.5-0.225 0.5-0.5v-10.516zM8 5v8h-1v-8h1zM11 5v8h-1v-8h1z"
          fill="#000000"
        />
      </svg>`;
  });
};

let i = 0;

addForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (inp.trim() === "" || inp === "") {
    val.style.display = "block";
  } else {
    arr.push(inp);

    const row = document.createElement("div");

    row.innerHTML = `
    <p
    class="main__text">${inp}</p>
    <button class="main__btn">
    <svg
    version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="17"
        height="17"
        viewBox="0 0 17 17"
        >
        <g></g>
        <path
        d="M10.935 2.016c-0.218-0.869-0.999-1.516-1.935-1.516-0.932 0-1.71 0.643-1.931 1.516h-3.569v1h11v-1h-3.565zM9 1.5c0.382 0 0.705 0.221 0.875 0.516h-1.733c0.172-0.303 0.485-0.516 0.858-0.516zM13 4h1v10.516c0 0.827-0.673 1.5-1.5 1.5h-7c-0.827 0-1.5-0.673-1.5-1.5v-10.516h1v10.516c0 0.275 0.224 0.5 0.5 0.5h7c0.276 0 0.5-0.225 0.5-0.5v-10.516zM8 5v8h-1v-8h1zM11 5v8h-1v-8h1z"
        fill="#000000"
        />
        </svg>
        <!--<svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="17"
          height="17"
          viewBox="0 0 17 17"
        >
          <g></g>
          <path
            d="M14 5.761h1v10.239h-14v-14h8.393v1h-7.393v12h12v-9.239zM4.854 8.146l-0.708 0.708 3.434 3.434 7.587-11.512-0.835-0.551-6.912 10.488-2.566-2.567z"
            fill="#000000"
          />
        </svg>-->
        </button>`;

    i++;

    row.setAttribute("draggable", true);
    row.setAttribute("class", "item__row");
    row.setAttribute("id", i);

    row.addEventListener("dragstart", onDragStart);

    mainActive.appendChild(row);

    mainActive.classList.add("active");

    const deleteBtn = document.querySelectorAll(".main__btn");

    deleteBtn.forEach((el) => {
      el.addEventListener("click", () => {
        el.parentNode.remove();
      });
    });
    // addInput.reset();
    inp = "";
    event.target.reset();
  }
});

clearBtn.addEventListener("click", () => {
  arr.length = 0;
  mainActive.classList.remove("active");
  mainActive.innerHTML = "";
});

// deleteBtn.addEventListener("click", () => {
//     arr.splice

// });

// mainActive.removeChild();
// mainActive.classList.remove("active");
