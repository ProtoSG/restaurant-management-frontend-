import ErrorTableCategory from "./components/ErrorTableCategory";
import LoadingTableCategory from "./components/LoadingTableCategory";
import SelectTableCategory from "./components/SelectTableCategory";
import useTableCategory from "./hooks/useTableCategory";


export default function TableCategoryContainer() {
  const { tableCategories, loading, error } = useTableCategory();


  return (
    <section className="w-full mb-8">
      {
        //       {/* {/* loading ? <LoadingTableCategory /> */ } */}
        //     {/*   : error ? <ErrorTableCategory /> */}
        <SelectTableCategory tableCategories={tableCategories} />
      }
    </section>
  );
}
