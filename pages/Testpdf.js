

function Tespdf() {
    let jsPDF = null;

    if (typeof window !== "undefined") {
        import("jspdf").then(module => {
            jsPDF = module.default;
        });
    }
    const handled = () => {
        var doc = new jsPDF()
        doc.text('Hello world!', 10, 10)
        doc.save('a4.pdf')
    }
    return (
        < div>
           
            Welcome to Next.js!
            < div>
                Welcome to Next.js!
    </div>
            < div>
                Welcome to Next.js!
    </div>
            < div>
                Welcome to Next.js!
    </div>
            < div>
                Welcome to Next.js!
    </div>
            <button onClick={handled} >Dowload Pdf</button>
        </div>
    )
}
export default Tespdf;