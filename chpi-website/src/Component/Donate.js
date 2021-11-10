import React from 'react'
import { Button, Table } from 'react-bootstrap';
import '../CSS/Donate.css';

const Donate = () => {

    const donation_links = [
        {
            link: "https://buy.stripe.com/8wM14gglPgFPaDS7sA",
            amount: 100,
            recurring: true,
        }, {
            link: "https://buy.stripe.com/3csfZa0mRahr4fu6ov",
            amount: 50,
            recurring: true,
        }, {
            link: "https://buy.stripe.com/dR600cglP4X7bHWeV0",
            amount: 25,
            recurring: true,
        }, {
            link: "https://buy.stripe.com/14k6oAglP0GRdQ428d",
            amount: 10,
            recurring: true,
        }, {
            link: "https://buy.stripe.com/4gw3coedHcpz9zO9AE",
            amount: 100,
            recurring: false,
        }, {
            link: "https://buy.stripe.com/7sI14gglPahrfYccMP",
            amount: 50,
            recurring: false,
        }, {
            link: "https://buy.stripe.com/7sI28kedH9dnaDS28a",
            amount: 25,
            recurring: false,
        }, {
            link: "https://buy.stripe.com/dR600c0mR4X7h2g9AA",
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

