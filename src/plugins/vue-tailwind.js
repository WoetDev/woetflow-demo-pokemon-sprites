import Vue from "vue";
import VueTailwind from "vue-tailwind";

import TInput from "vue-tailwind/dist/t-input";
import TTextarea from "vue-tailwind/dist/t-textarea";
import TSelect from "vue-tailwind/dist/t-select";
import TButton from "vue-tailwind/dist/t-button";
import TInputGroup from "vue-tailwind/dist/t-input-group";
import TTag from "vue-tailwind/dist/t-tag";
import TAlert from "vue-tailwind/dist/t-alert";
import TCard from "vue-tailwind/dist/t-card";
import TTable from "vue-tailwind/dist/t-table";
import TPagination from "vue-tailwind/dist/t-pagination";

export const settings = {
  "t-input": {
    component: TInput,
    props: {
      fixedClasses:
        "block w-full px-3 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed",
      classes:
        "text-black placeholder-gray-400 bg-white border-gray-300 focus:border-blue-500 ",
      variants: {
        danger: "border-red-300 bg-red-50 placeholder-red-200 text-red-900",
        success:
          "border-green-300 bg-green-50 placeholder-gray-400 text-green-900"
      }
    }
  },
  "t-textarea": {
    component: TTextarea,
    props: {
      fixedClasses:
        "block w-full px-3 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed",
      classes:
        "text-black placeholder-gray-400 bg-white border-gray-300 focus:border-blue-500 ",
      variants: {
        danger: "border-red-300 bg-red-50 placeholder-red-200 text-red-900",
        success:
          "border-green-300 bg-green-50 placeholder-gray-400 text-green-900"
      }
    }
  },
  "t-select": {
    component: TSelect,
    props: {
      fixedClasses:
        "block w-full pl-3 pr-10 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed",
      classes:
        "text-black placeholder-gray-400 bg-white border-gray-300 focus:border-blue-500 ",
      variants: {
        danger: "border-red-300 bg-red-50 placeholder-red-200 text-red-900",
        success:
          "border-green-300 bg-green-50 placeholder-gray-400 text-green-900"
      }
    }
  },
  "t-button": {
    component: TButton,
    props: {
      fixedClasses:
        "transition duration-300 ease-in-out font-bold py-3 px-8 border-b-4 rounded",
      classes:
        "bg-yellow-100 text-yellow-600 border-yellow-600 hover:border-yellow-600",
      variants: {
        secondary:
          "text-gray-800 bg-white border border-gray-300 shadow-sm hover:text-gray-600",
        error:
          "text-white bg-red-500 border border-transparent rounded shadow-sm hover:bg-red-600",
        success:
          "text-white bg-green-500 border border-transparent rounded shadow-sm hover:bg-green-600",
        link: "text-yellow-500 underline hover:text-yellow-600"
      }
    }
  },
  "t-input-group": {
    component: TInputGroup,
    props: {
      fixedClasses: {
        wrapper: "",
        label: "block",
        body: "",
        feedback: " text-sm text-sm",
        description: "text-gray-400 text-sm"
      },
      classes: {
        wrapper: "",
        label: "",
        body: "",
        feedback: "text-gray-400",
        description: "text-gray-400"
      },
      variants: {
        danger: {
          label: "text-red-500",
          feedback: "text-red-500"
        },
        success: {
          label: "text-green-500",
          feedback: "text-green-500"
        }
      }
    }
  },
  "t-tag": {
    component: TTag,
    props: {
      fixedClasses: "",
      classes: "",
      variants: {
        title: "text-2xl leading-8 font-extrabold text-gray-900 tracking-tight",
        subtitle: "text-lg leading-6 font-medium text-gray-900",
        error: "text-red-500",
        badge:
          "inline-flex items-center px-3 rounded-full text-xs font-medium leading-4 bg-gray-100 text-gray-800",
        avatar:
          "inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-500 overflow-hidden leading-none text-center"
      }
    }
  },
  "t-alert": {
    component: TAlert,
    props: {
      fixedClasses: {
        wrapper: "relative flex items-center p-4 border-l-4  rounded shadow-sm",
        body: "flex-grow",
        close:
          "absolute relative flex items-center justify-center ml-4 flex-shrink-0 w-6 h-6 transition duration-100 ease-in-out rounded  focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50",
        closeIcon: "fill-current h-4 w-4"
      },
      classes: {
        wrapper: "bg-blue-50 border-blue-500",
        body: "text-blue-700",
        close: "text-blue-500 hover:bg-blue-200"
      },
      variants: {
        danger: {
          wrapper: "bg-red-50 border-red-500",
          body: "text-red-700",
          close: "text-red-500 hover:bg-red-200"
        },
        success: {
          wrapper: "bg-green-50 border-green-500",
          body: "text-green-700",
          close: "text-green-500 hover:bg-green-200"
        }
      }
    }
  },
  "t-card": {
    component: TCard,
    props: {
      fixedClasses: {
        wrapper: "rounded-lg shadow-md w-2/3 m-auto tracking-wider",
        body: "p-3",
        header: "border-b-4 border-gray-700 p-3 font-bold text-2xl",
        footer: "border-t p-3 rounded-b"
      },
      classes: {
        wrapper: "bg-gray-600 text-white",
        body: "",
        header: "",
        footer: "border-gray-100"
      },
      variants: {
        danger: {
          wrapper: "bg-red-50 text-red-700 border-red-200",
          header: "border-red-200 text-red-700",
          footer: "border-red-200 text-red-700"
        }
      }
    }
  },
  "t-table": {
    component: TTable,
    props: {
      classes: {
        table:
          "min-w-full bg-transparent divide-y divide-gray-100 shadow-sm border-gray-200 border",
        thead: "",
        theadTr: "",
        theadTh: "px-3 py-2 font-semibold text-left border-b",
        tbody: "divide-y divide-gray-100",
        tr: "",
        td: "px-3 py-2 whitespace-no-wrap",
        tfoot: "",
        tfootTr: "",
        tfootTd: ""
      },
      variants: {
        thin: {
          td: "p-1 whitespace-no-wrap text-sm",
          theadTh: "p-1 font-semibold text-left border-b text-sm"
        }
      }
    }
  },
  "t-pagination": {
    component: TPagination,
    props: {
      classes: {
        wrapper: "table border-collapse text-center bg-white mx-auto shadow-sm",
        element:
          "w-8 h-8 border border-gray-200 table-cell hover:border-blue-100",
        activeElement:
          "w-8 h-8 border border-gray-200 border-blue-500 table-cell hover:border-blue-600",
        disabledElement: "w-8 h-8 border border-gray-200 table-cell",
        ellipsisElement: "w-8 h-8 border border-gray-200 hidden md:table-cell",
        activeButton:
          "bg-blue-500 w-full h-full text-white hover:bg-blue-600 transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50",
        disabledButton:
          "opacity-25 w-full h-full cursor-not-allowed transition duration-100 ease-in-out",
        button:
          "hover:bg-blue-100 w-full h-full transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50",
        ellipsis: ""
      },
      variants: {
        rounded: {
          wrapper: "bg-white mx-auto text-center flex space-x-2",
          element: "w-8 h-8 rounded-full",
          activeElement: "w-8 h-8 rounded-full",
          disabledElement: "w-8 h-8 rounded-full",
          ellipsisElement: "w-8 h-8 rounded-full hidden md:inline",
          activeButton:
            "border border-blue-500 bg-blue-500 w-full h-full rounded-full text-white hover:bg-blue-600 transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50",
          disabledButton:
            "border border-gray-200  opacity-25 w-full h-full rounded-full cursor-not-allowed transition duration-100 ease-in-out",
          button:
            "border border-gray-200 hover:bg-blue-100 hover:border-blue-100 rounded-full w-full h-full transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50",
          ellipsis: ""
        }
      }
    }
  }
};

Vue.use(VueTailwind, settings);
