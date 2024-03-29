import { component$ } from "@builder.io/qwik";
import type CardProps from "~/interfaces/CardProps";

export default component$<CardProps>((props) => {
  return (
    <div class="bg-blue-300 bg-opacity-75 text-sky-900 dark:bg-blue-950 dark:bg-opacity-75 rounded-lg m-6 p-2 dark:text-sky-300">
      <div class="">
        <div class="text-xl font-bold my-1 mx-3">{props.title}</div>
        <div class="text-gray-700 dark:text-gray-400 my-1 mx-6">
          {props.subtitle}
        </div>
        {!(props.description === undefined || props.description === null) && (
          <div class="text-gray-900 dark:text-gray-200 my-2 mx-2">
            {props.description}
          </div>
        )}
        {!(props.items === undefined) &&
          props.items.map((p) => (
            <div key={p} class="text-sm">
              <p>{p}</p>
            </div>
          ))}
        {!(props.footer === undefined) && (
          <div class="text-xs text-right text-gray-600 dark:text-gray-500 my-2">
            {props.footer}
          </div>
        )}
      </div>
      {!(props.startDate === undefined || props.startDate === null) && (
        <div class="text-xs text-center dark:text-yellow-300 text-yellow-900 my-2">
          Started studying {props.startDate}
        </div>
      )}
      {!(props.finishDate === undefined || props.finishDate === null) && (
        <div class="text-xs text-center dark:text-yellow-300 text-yellow-900 m-1">
          Finished studying {props.finishDate}
        </div>
      )}
      {!(props.startedWork === undefined || props.startedWork === null) && (
        <div class="text-xs text-center dark:text-yellow-300 text-yellow-900 my-2">
          Started working {props.startedWork}
        </div>
      )}
      {!(props.finishedWork === undefined || props.finishedWork === null) && (
        <div class="text-xs text-center dark:text-yellow-300 text-yellow-900 m-1">
          Finished working {props.finishedWork}
        </div>
      )}
    </div>
  );
});
