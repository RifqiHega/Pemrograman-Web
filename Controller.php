<?php

namespace Controller;

include "Traits/ResponseFormatter.php";

use Traits\ResponsesFormatter;

class Controller{
    var $controllerName;
    var $controllerMethod;

    public function getControllerAttribute(){
        return[
            "ControllerName" => $this->controllerName,
            "Method"=> $this->controllerName,
        ];
    }
}

class ProductController extends Controller{
    use ResponsesFormatter;

    public function __construct()
    {
        $this->controllerName = "Get All Product";
        $this->controllerMethod = "Get";
    }

    public function getAllProduct(){
        $dummyData = [
            "Air Mineral", "Kebab", "Spagetti", "Jus Jambu"
        ];

        $response=[
            "controller_attribute"=>$this->getControllerAttribute(),
            "product"=>$dummyData
        ];

        return $this->responseFormatter(200,"Success", $response);
    }

}




?>