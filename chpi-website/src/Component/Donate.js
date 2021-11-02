import React from 'react'
import { Button, Table } from 'react-bootstrap';
import '../CSS/Donate.css';

const Donate = () => {

    const donation_links = [
        {
            link: "https://dashboard.stripe.com/payment-links/plink_1JrTN6FkHkn4W84EMuOv6TOi",
            amount: 100,
            recurring: true,
        }, {
            link: "https://dashboard.stripe.com/payment-links/plink_1JrTMQFkHkn4W84EPGyuyYOp",
            amount: 50,
            recurring: true,
        }, {
            link: "https://dashboard.stripe.com/payment-links/plink_1JrTLsFkHkn4W84ERZZ8OJiC",
            amount: 25,
            recurring: true,
        }, {
            link: "https://dashboard.stripe.com/payment-links/plink_1JrTLMFkHkn4W84E69Q4Aslq",
            amount: 10,
            recurring: true,
        }, {
            link: "https://dashboard.stripe.com/payment-links/plink_1JrTK1FkHkn4W84ExOFayZUw",
            amount: 100,
            recurring: false,
        }, {
            link: "https://dashboard.stripe.com/payment-links/plink_1JrTInFkHkn4W84EItxSfQiR",
            amount: 50,
            recurring: false,
        }, {
            link: "https://dashboard.stripe.com/payment-links/plink_1JrTE2FkHkn4W84Em0G60hty",
            amount: 25,
            recurring: false,
        }, {
            link: "https://dashboard.stripe.com/payment-links/plink_1JrT9MFkHkn4W84Evf0GE3bg",
            amount: 10,
            recurring: false,
        }
    ]

    const linkToButton = (info) => {
        return (
            <Button className="secondary-color" id={info.amount + "_" + info.recurring} href={info.link} target="_blank">
                {"$" + info.amount + " " + (info.recurring ? "Recurring Monthly" : "One-Time")}
            </Button>
        )
    }

    return (
        <div>
            <div className="donate">
                <div className="donate-header">
                    <h1 className="donate-title">DONATE</h1>
                    If you'd like to help out with our mission, feel free to donate using these links!
                    <br />
                    <br />
                </div>
                <div className="donate-table-container">
                    <Table responsive className="donate-table">
                        <tbody>
                            <tr>
                                <td>
                                    {linkToButton(donation_links[7])}
                                </td>
                                <td>
                                    {linkToButton(donation_links[6])}
                                </td>
                                <td>
                                    {linkToButton(donation_links[5])}
                                </td>
                                <td>
                                    {linkToButton(donation_links[4])}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {linkToButton(donation_links[3])}
                                </td>
                                <td>
                                    {linkToButton(donation_links[2])}
                                </td>
                                <td>
                                    {linkToButton(donation_links[1])}
                                </td>
                                <td>
                                    {linkToButton(donation_links[0])}
                                </td>
                            </tr>
                            <tr><td></td><td></td><td></td><td></td></tr>

                        </tbody>
                    </Table>
                </div>
            </div>
        </div >
    )
}

export default Donate;

