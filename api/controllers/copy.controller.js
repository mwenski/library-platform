const copyService = require('../services/copy.service');

class CopyController{
    async getCopies(req, res){
        try{
            const copies = await copyService.getCopies();
            res.status(200).json({
                message: "Copies found!",
                data: copies
            });
        }catch(err){
            res.status(500).json({
                message: "Internal error",
                data: null
            })
        };
    }

    async getCopyById(req, res){
        try{
            const copy = await copyService.getCopyById(req.params.id);
            res.status(200).json({
                message: "Copy found!",
                data: copy
            });
        }catch(err){
            res.status(500).json({
                message: "Internal error",
                data: null
            })
        };
    }

    async getCopiesByBookId(req, res){
        try{
            const copies = await copyService.getCopiesByBookId(req.params.id);
            res.status(200).json({
                message: "Copies found!",
                data: copies
            });
        }catch(err){
            res.status(500).json({
                message: "Internal error",
                data: null
            })
        };
    }

    async createCopy(req, res){
        try{
            const copy = await copyService.createCopy(req.body.copy);
            res.status(200).json({
                message: "Copy created!",
                data: copy
            });
        }catch(err){
            res.status(500).json({
                message: "Internal error",
                data: null
            })
        };
    }

    async updateCopy(req, res){
        try{
            const copy = await copyService.updateCopy(req.body.copy);
            res.status(200).json({
                message: "Copy updated!",
                data: copy
            });
        }catch(err){
            res.status(500).json({
                message: "Internal error",
                data: null
            })
        };
    }

    async deleteCopy(req, res){
        try{
            const copy = await copyService.deleteCopy(req.params.id);
            res.status(200).json({
                message: "Copy removed!",
                data: copy
            });
        }catch(err){
            res.status(500).json({
                message: "Internal error",
                data: null
            })
        };
    }

}

module.exports = new CopyController();