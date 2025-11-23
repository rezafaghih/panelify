export default function NotFoundPage (){
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <h1 className="text-3xl font-black">
                صفحه مورد نظر یافت نشد
            </h1>
            <p dir = "rtl">
                علت خطا : لطفا دقت نمایید صفحه مورد نظر را در بخش (Pages) ایجاد کرده باشید و آن را در App.jsx تعریف کرده باشید
            </p>
        </div>
    )
}