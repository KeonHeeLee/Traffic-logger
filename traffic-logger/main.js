class TrafficLogger {
    /* option params */
    countingMode = false;

    TrafficLogger(options){
        if(options["counter"]) this.countingMode = true;
    }

    startPoint(req){
        /* 
            Get option informations.
        */
        return req;
    }

    endPoint(res){
        /* 
            TODO
        */
        return res;
    }
}

export default TrafficLogger;