import { Request, Response, Router } from 'express';

export const mergeConcatSwitchExhaustedRoutes = Router();

mergeConcatSwitchExhaustedRoutes.get('/users/:id', async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;

    if (id === '1') {
        await wait(3000);
        res.status(200).send({
            id: 1,
            name: 'Первый'
        });
    }
    if (id === '2') {
        await wait(1000);
        res.status(200).send({
            id: 2,
            name: 'Второй'
        });
    }
    if (id === '3') {
        await wait(5000);
        res.status(200).send({
            id: 3,
            name: 'Третий'
        });
    }
    if (id === '4') {
        await wait(2000);
        res.status(200).send({
            id: 4,
            name: 'Четвёртый'
        });
    }
});

const wait = (ms: number): Promise<void > => {
    return new Promise(resolve => setTimeout(resolve, ms));
}