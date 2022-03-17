import jsPDF from 'jspdf'
import 'jspdf-autotable'

export default function GeneratePDF({ leads }) {
    function generate() {
        const doc = new jsPDF()

        doc.autoTable({
            head: [['טלפון', 'שם', 'Emaill', 'מוצר']],
            body: leads.map(({ phone, name, email, product }) => {
                return [phone, name, email, product]
            }),
        })

        doc.save('persons.pdf')
    }

    return (
        <div>
            <button onClick={generate} type="primary">
                Download PDF
            </button>
        </div>
    )
}
